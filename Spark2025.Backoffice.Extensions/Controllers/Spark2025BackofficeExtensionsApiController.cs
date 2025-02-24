using Asp.Versioning;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Spark2025.Backoffice.Extensions.Controllers
{
    [ApiVersion("1.0")]
    [ApiExplorerSettings(GroupName = "Spark2025.Backoffice.Extensions")]
    public class Spark2025BackofficeExtensionsApiController : Spark2025BackofficeExtensionsApiControllerBase
    {
        [HttpGet("ping")]
        [ProducesResponseType<string>(StatusCodes.Status200OK)]
        public string Ping() => "Pong";
    }
}