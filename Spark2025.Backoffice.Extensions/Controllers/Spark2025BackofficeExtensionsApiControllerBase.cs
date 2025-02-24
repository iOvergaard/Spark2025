using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Umbraco.Cms.Api.Common.Attributes;
using Umbraco.Cms.Web.Common.Authorization;
using Umbraco.Cms.Web.Common.Routing;

namespace Spark2025.Backoffice.Extensions.Controllers
{
    [ApiController]
    [BackOfficeRoute("spark2025backofficeextensions/api/v{version:apiVersion}")]
    [Authorize(Policy = AuthorizationPolicies.SectionAccessContent)]
    [MapToApi(Constants.ApiName)]
    public class Spark2025BackofficeExtensionsApiControllerBase : ControllerBase
    {
    }
}