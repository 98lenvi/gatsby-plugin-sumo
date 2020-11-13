/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */
// You can delete this file if you're not using it

import { Helmet } from "react-helmet"
import React from "react"

export const wrapRootElement = ({ element }, pluginOptions) => {
    
    const { sumoSiteId } = pluginOptions;
    
    return (
      <>
        {element}
        <Helmet>
            {typeof window !== "undefined" && (
                <script async>
                    {(function(s, u, m, o, j, v) {
                    j = u.createElement(m);
                    v = u.getElementsByTagName(m)[0];
                    j.async = 1;
                    j.src = o;
                    j.dataset.sumoSiteId =sumoSiteId;
                    v.parentNode.insertBefore(j, v);
                })(window, document, "script", "//load.sumo.com/")}
                </script>
        )}
        </Helmet>
      </>
    )
  }