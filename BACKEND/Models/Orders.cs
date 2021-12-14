using System;
using MongoDB.Bson;

namespace backend.Models
{
    public class Orders
    {
        public ObjectId id { get; set; }

        public int orderId { get; set; }

        public int userId { get; set; }

        public DateTime date { get; set; }

        public int destinationId { get; set; }

        public string state { get; set; }

        public int cheese { get; set; }
        
        public int ham {get; set; }
        
        public bool butter {get; set;}
        
        public bool ketchup {get; set; }
        
        public bool qantity {get; set; }
    }
}