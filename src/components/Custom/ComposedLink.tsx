import * as React from "react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { Link, SxProps } from "@mui/material";

// Add support for the sx prop for consistency with the other branches.

interface ComposedLinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">,
    Omit<NextLinkProps, "href" | "as"> {
  to: NextLinkProps["href"];
  linkAs?: NextLinkProps["as"];
  sx?: SxProps;
}

const ComposedLink = React.forwardRef<HTMLAnchorElement, ComposedLinkProps>(
  function ComposedLink(props, ref) {
    const {
      to,
      linkAs,
      replace,
      scroll,
      shallow,
      prefetch,
      locale,
      sx,
      ...other
    } = props;

    return (
      <NextLink
        href={to}
        prefetch={prefetch}
        as={linkAs}
        replace={replace}
        scroll={scroll}
        shallow={shallow}
        passHref
        locale={locale}
      >
        <Link
          sx={{ textDecoration: "none", color: "#000", ...sx }}
          ref={ref}
          {...other}
        />
      </NextLink>
    );
  }
);

export default ComposedLink;
