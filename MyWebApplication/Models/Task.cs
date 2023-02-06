using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MyWebApplication.Models
{
    public class Task
    {
        public int id { get; set; }

        public string name { get; set; }

        public string description { get; set;  }

        public bool done { get; set; }

        public int userId { get; set; }
    }
}