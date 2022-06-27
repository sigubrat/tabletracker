
using Microsoft.AspNetCore.Mvc;
using TableTrackerAPI.Models;
using TableTrackerAPI.Services;


namespace TableTrackerAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UpdateController : ControllerBase
    {
        private readonly UpdateService _updateService;

        public UpdateController(UpdateService updateService)
        {
            _updateService = updateService;
        }

        [HttpPost]
        [Route("/update")]
        public async Task<IActionResult>PostUpdateStatus(StatusItem status)
        {
            StatusItem newStatus = _updateService.setStatus(status.isAvailable, status.timeStamp);
            if (newStatus == null)
                return BadRequest();

            return Ok();
        }

        [HttpGet]
        [Route("/get")]
        public async Task<IActionResult> GetStatus()
        {
            StatusItem status = _updateService.getStatus();
            return Ok(status);
        }
    }
}
