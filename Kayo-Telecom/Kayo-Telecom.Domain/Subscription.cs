using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Kayo_Telecom.Domain
{
    public class Subscription
    {
        public int Id { get; set; }
        public Plan Plan { get; set; }
        public User User { get; set; }
        public List<Device> Devices { get; set; }
    }
}
