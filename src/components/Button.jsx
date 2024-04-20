/*import { styled } from "styled-components";

Note: please Import through one approach using styled
Components or Tailwind CSS.

export const Button = styled.button`
  padding: 1rem 2rem;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 0.25rem;
  color: #1f2937;
  background-color: #ff9d15;
  border-radius: 6px;
  border: none;
  @media (max-width: 375px) {
    font-size: 11px;
    padding: 1px 1px;
  }
  &:hover {
    background-color: #f0920e;
    cursor: pointer;
  }
`;
export const NewAccBtn = styled(Button)`
  cursor: pointer;
  background: none;
  line-height: inherit;
  // color: #f0b322;
  border: none;
  &:hover {
    // background-color: none;
    background: none;
    color: #ca7d12;
  }
  &:focus {
    outline: none;
  }
`;*/

export default function tailwindButton({ children, ...props }) {
  return (
    <button
      {...props}
      className="px-4 py-2 font-semibold uppercase rounded text-stone-900 bg-amber-400 hover:bg-amber-500"
    >
      {children}
    </button>
  );
}
