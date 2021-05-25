import { Link, useLocation } from "react-router-dom";

import { NavigatorButtonWrapper } from "src/styles/components/dashboard-wrapper/dashboard-wrapper-sidebar/navigator-button";
import { NavigatorButtonProps } from "./types";

export function NavigatorButton({ router, label, icon }: NavigatorButtonProps) {
  const actualRouter = useLocation();

  const pathname = actualRouter.pathname;
  const formattedRouter = router[0] === "/" ? router : `/${router}`;

  return (
    <Link to={formattedRouter}>
      <NavigatorButtonWrapper type="button" isActive={formattedRouter === pathname ? true : false}>
        <strong>
          { label }
        </strong>
        <span>
          { icon }
        </span>
      </NavigatorButtonWrapper>
    </Link>
  )
}