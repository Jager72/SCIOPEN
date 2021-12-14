using System;
using MongoDB.Bson;

namespace backend.Models
{
    public class Rooms
    {
        public ObjectId id { get; set; }

        public int roomNumber { get; set; }

        public string name { get; set; }
        
        public string description { get; set; }

        public bool available { get; set; }
        
        public string startDate { get; set; }
    }
}