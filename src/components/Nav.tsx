"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styled, { ThemeProvider } from "styled-components";

// tabs for the 5 features. active one turns yellow, same idea as mp-4
// owner: shared setup

const links = [
    { name: "Discover", href: "/" },
    { name: "Library", href: "/library" },
    { name: "Calendar", href: "/calendar" },
    { name: "Goals", href: "/goals" },
  { name: "Rank", href: "/rank" },
];

const Bar = styled.nav`
    background-color: #5a6fa8;
    display: flex;
    flex-wrap: wrap;
`;

const StyledLink = styled(Link)`
    color: ${(props) => ((props.theme as { isActive: boolean }).isActive ? "yellow" : "#ffffff")};
    text-decoration: ${(props) => ((props.theme as { isActive: boolean }).isActive ? "underline" : "none")};
    padding: 12px 18px;
    font-size: calc(14px + 0.4vw);
`;

export default function Nav() {
    const pathname = usePathname();

    return (
        <Bar>
            {
                links.map((link) =>
                    <ThemeProvider key={link.name} theme={{ isActive: pathname === link.href }}>
                        <StyledLink href={link.href}>
                            {link.name}
                        </StyledLink>
                    </ThemeProvider>
                )
            }
        </Bar>
    );
}
