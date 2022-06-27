using TableTrackerAPI.Models;

namespace TableTrackerAPI.Services
{
    public class UpdateService
    {
        // Will only need to stare status in memory
        private StatusItem status = new StatusItem();

        // Gets the current status
        public StatusItem getStatus()
        {
            return status;
        }

        // Set the status to contain the updated values
        public StatusItem setStatus(bool state, DateTime lastUpdate)
        {
            status.isAvailable = state;
            status.timeStamp = lastUpdate;
            return status;
        }



        
    }
}
