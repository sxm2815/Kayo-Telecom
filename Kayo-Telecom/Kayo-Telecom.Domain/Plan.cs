using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Kayo_Telecom.Domain
{
    public class Plan
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string BandwidthLimit { get; set; }
        public int Devices { get; set; }
        public int Price { get; set; }

    }
}
