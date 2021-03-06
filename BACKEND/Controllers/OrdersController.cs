using backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using MongoDB.Bson;
using MongoDB.Driver;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public OrdersController(IConfiguration configuration)
        {
            _configuration = configuration;
        }


        // GET: api/Orders
        [HttpGet]
        public JsonResult GetOrders()
        {
            var client = new MongoClient(_configuration.GetConnectionString("con"));

            var dbList = client.GetDatabase("SCIOPEN").GetCollection<Orders>("orders").AsQueryable();

            return new JsonResult(dbList);
        }
        
        // GET: api/Orders/id
        [HttpGet("orderId")]
        public JsonResult GetOrderById(int id)
        {
            var client = new MongoClient(_configuration.GetConnectionString("con"));
            
            var filter = Builders<Orders>.Filter.Eq("orderId", id);

            var dbList = client.GetDatabase("SCIOPEN").GetCollection<Orders>("orders").FindSync(filter).SingleOrDefaultAsync();

            return new JsonResult(dbList.Result);
        }

        // POST: api/Orders
        [HttpPost]
        public JsonResult AddOrder(Orders order)
        {
            var client = new MongoClient(_configuration.GetConnectionString("con"));

            client.GetDatabase("SCIOPEN").GetCollection<Orders>("orders").InsertOne(order);

            return new JsonResult("Success");
        }

        // PUT: api/Orders
        [HttpPut]
        public JsonResult EditOrder(Orders order)
        {
            MongoClient client = new MongoClient(_configuration.GetConnectionString("con"));

            var filter = Builders<Orders>.Filter.Eq("orderId", order.orderId);
            var update = Builders<Orders>.Update.Set("userId", order.userId)
                .Set("date", order.date)
                .Set("destinationId", order.destinationId)
                .Set("state", order.state)
                .Set("cheese", order.cheese)
                .Set("ham", order.ham)
                .Set("butter", order.butter)
                .Set("ketchup", order.ketchup)
                .Set("quantity", order.quantity);

            client.GetDatabase("SCIOPEN").GetCollection<Orders>("orders").UpdateOne(filter,update);

            return new JsonResult("Success");
        }

        // DELETE: api/Orders
        [HttpDelete("_id")]
        public JsonResult DeleteOrder(int id)
        {
            var client = new MongoClient(_configuration.GetConnectionString("con"));

            var filter = Builders<Orders>.Filter.Eq("orderId", id);

            client.GetDatabase("SCIOPEN").GetCollection<Orders>("orders").DeleteOne(filter);

            return new JsonResult("Success");
        }
    }
}