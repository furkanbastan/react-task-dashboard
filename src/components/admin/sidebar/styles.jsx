import styled from 'styled-components'

export const Sidebar = styled.aside`
    grid-row-start: 1;
    grid-row-end: 3;
    padding-inline: calc(var(--space-xl));
    padding-top: 48px;
    border-right: 1px solid var(--border-color);
    display: flex;
    flex-direction: column;
    gap: calc(var(--space-xl)*3);
`;