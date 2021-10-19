using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Kayo_Telecom.Domain
{
    public class Device
    {
        public int Id { get; set; }
        public Subscription Subscription { get; set; }
        public string Name { get; set; }
        public string PhoneNumber { get; set; }

    }
}
