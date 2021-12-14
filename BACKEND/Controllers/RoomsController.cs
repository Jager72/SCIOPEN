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
    }
}