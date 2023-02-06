using MyWebApplication.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MyWebApplication.Controllers
{
    public class TasksController : ApiController
    {

        public static List<Task> TASKS = new List<Task>
        {
            new Task { id = 1, name = "task1 from C# server", done = true, userId=1 },
            new Task { id = 2, name = "task2 from C# server", done = false, userId=2 },
            new Task { id = 3, name = "task3 from C# server", done = true, userId=3 },
            new Task { id = 4, name = "task4 from C# server", done = false, userId=1 },
            new Task { id = 5, name = "task5 from C# server", done = true, userId=2 },
            new Task { id = 6, name = "task6 from C# server", done = false, userId=3 }

        };
        // GET: api/Tasks
        public IEnumerable<Task> Get()
        {
            return TASKS;
        }

        // GET: api/Tasks/5
        public IEnumerable<Task> Get(bool done)
        {
            if (done)
            {
                return TASKS.Where(x => x.done);
            }
            return TASKS;
        }

        // POST: api/Tasks
        public void Post([FromBody]List<Task> tasksToSave)
        {
            if (tasksToSave[0].name == "aa")
                TASKS = tasksToSave;
            //else
            // throw new Exception("server error");
            TASKS = tasksToSave;
        }

        // PUT: api/Tasks/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Tasks/5
        public void Delete(int id)
        {
        }
    }
}
