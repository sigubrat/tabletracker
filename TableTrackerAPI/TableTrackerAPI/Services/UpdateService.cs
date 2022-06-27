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
            // Check if status is deprecated
            if(status.timeStamp.AddMinutes(1) < DateTime.Now)
            {
                // Change status to available
                status.timeStamp = DateTime.Now;
                status.isAvailable = true;
            }
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
