using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReactCapabilities.Models;
using ReactCapabilities.staticInformation;

namespace ReactCapabilities.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GridController : Controller
    {
        [HttpGet("[action]")]
        public GridModel[] Get()
        {
            return GridContent.grid;
        }

        [HttpPost("[action]")]
        public string Post([FromBody] GridModel grid)
        {
            Console.WriteLine("id: " + grid.Id + " column1: " + grid.Col1 + " column2: " + grid.Col2 + " column3: " + grid.Col3);

            int gridLength = GridContent.grid.Length;
            var listOfArray = GridContent.grid.ToList();
            listOfArray.Add(grid);
            GridContent.grid = listOfArray.ToArray();
            int newGridLength = GridContent.grid.Length;
            Console.WriteLine(GridContent.grid.Length);

            if (newGridLength > gridLength)
            {
                return "added";
            }
            return "not added";
        }

        [HttpPut("[action]")]
        public string Put([FromBody] GridModel grid)
        {
            Console.WriteLine("id: " + grid.Id + " column1: " + grid.Col1 + " column2: " + grid.Col2 + " column3: " + grid.Col3);
            GridContent.grid[grid.Id] = grid;

            return "success";
        }
    }
}
