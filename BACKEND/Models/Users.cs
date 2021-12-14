using MongoDB.Bson;

namespace backend.Models
{
    public class Users
    {
        public ObjectId id { get; set; }

        public int userId { get; set; }
        
        public string name { get; set; }

        public string pin { get; set; }

        public string role { get; set; }
    }
}