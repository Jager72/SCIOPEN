using backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using MongoDB.Driver;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RoomsController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public RoomsController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        // GET: api/Rooms
        [HttpGet]
        public JsonResult GetRooms()
        {
            var client = new MongoClient(_configuration.GetConnectionString("con"));

            var dbList = client.GetDatabase("SCIOPEN").GetCollection<Rooms>("rooms").AsQueryable();

            return new JsonResult(dbList);
        }
        
        // GET: api/Rooms/id
        [HttpGet("roomNumber")]
        public JsonResult GetOrderById(int id)
        {
            var client = new MongoClient(_configuration.GetConnectionString("con"));
            
            var filter = Builders<Rooms>.Filter.Eq("roomNumber", id);

            var dbList = client.GetDatabase("SCIOPEN").GetCollection<Rooms>("orders").FindSync(filter);

            return new JsonResult(dbList);
        }

        // POST: api/Rooms
        [HttpPost]
        public JsonResult AddOrder(Rooms room)
        {
            var client = new MongoClient(_configuration.GetConnectionString("con"));

            client.GetDatabase("SCIOPEN").GetCollection<Rooms>("rooms").InsertOne(room);

            return new JsonResult("Success");
        }

        // PUT: api/Rooms
        [HttpPut]
        public JsonResult EditRoom(Rooms room)
        {
            MongoClient client = new MongoClient(_configuration.GetConnectionString("con"));

            var filter = Builders<Rooms>.Filter.Eq("roomNumber", room.roomNumber);
            var update = Builders<Rooms>.Update.Set("name", room.name)
                .Set("description", room.description)
                .Set("available", room.available)
                .Set("startDate", room.startDate);

            client.GetDatabase("SCIOPEN").GetCollection<Rooms>("rooms").UpdateOne(filter,update);

            return new JsonResult("Success");
        }

        // DELETE: api/Rooms
        [HttpDelete("_id")]
        public JsonResult DeleteRoom(string id)
        {
            var client = new MongoClient(_configuration.GetConnectionString("con"));

            var filter = Builders<Rooms>.Filter.Eq("roomNumber", id);

            client.GetDatabase("SCIOPEN").GetCollection<Rooms>("rooms").DeleteOne(filter);

            return new JsonResult("Success");
        }
    }
}