using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using MongoDB.Bson;
using MongoDB.Driver;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public UserController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        
        // GET: api/Users
        [HttpGet]
        public JsonResult GetOrders()
        {
            var client = new MongoClient(_configuration.GetConnectionString("con"));

            var dbList = client.GetDatabase("SCIOPEN").GetCollection<Users>("users").AsQueryable();

            return new JsonResult(dbList);
        }
        
        // GET: api/Users/id
        [HttpGet("orderId")]
        public JsonResult GetUserById(int id)
        {
            var client = new MongoClient(_configuration.GetConnectionString("con"));
            
            var filter = Builders<Users>.Filter.Eq("userId", id);

            var dbList = client.GetDatabase("SCIOPEN").GetCollection<Users>("users").FindSync(filter);

            return new JsonResult(dbList);
        }

        // POST: api/Users
        [HttpPost]
        public JsonResult AddOrder(Users user)
        {
            var client = new MongoClient(_configuration.GetConnectionString("con"));

            client.GetDatabase("SCIOPEN").GetCollection<Users>("users").InsertOne(user);

            return new JsonResult("Success");
        }
        
        // PUT: api/User
        [HttpPut]
        public JsonResult EditUser(Users user)
        {
            MongoClient client = new MongoClient(_configuration.GetConnectionString("con"));

            var filter = Builders<Users>.Filter.Eq("_id", user.id);
            var update = Builders<Users>.Update.Set("orderId", user.userId)
                .Set("userId", user.name)
                .Set("pin", user.pin)
                .Set("role", user.role);

            client.GetDatabase("SCIOPEN").GetCollection<Users>("users").UpdateOne(filter,update);

            return new JsonResult("Success");
        }

        // DELETE: api/Users
        [HttpDelete("_id")]
        public JsonResult DeleteOrder(string id)
        {
            var client = new MongoClient(_configuration.GetConnectionString("con"));

            var filter = Builders<Users>.Filter.Eq("_id", ObjectId.Parse(id));

            client.GetDatabase("SCIOPEN").GetCollection<Users>("users").DeleteOne(filter);

            return new JsonResult("Success");
        }
        
        // GET: api/Users/name/pin
        [HttpGet("{name}/{pin}")]
        public JsonResult Login(string name, string pin)
        {
            var client = new MongoClient(_configuration.GetConnectionString("con"));

            var nameFilter = Builders<Users>.Filter.Eq("name", name);
            var pinFilter = Builders<Users>.Filter.Eq("pin", pin);

            var result = client.GetDatabase("SCIOPEN").GetCollection<Users>("users").Find(nameFilter & pinFilter).FirstOrDefault();

            if (result != null)
            {
                return new JsonResult("Success");
            }

            return new JsonResult("Failed");
        }
    }
}