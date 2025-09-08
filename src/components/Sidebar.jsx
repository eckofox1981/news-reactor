import { Drawer } from "@mui/material";

export function Sidebar({ isOpen, toggleDrawer }) {
  return (
    <Drawer open={isOpen} onClose={() => toggleDrawer(false)}>
      <nav>
        <ul>
          <li>hej</li>
          <li>hej</li>
          <li>hej</li>
          <li>hej</li>
          <li>hej</li>
          <li>hej</li>
          <li>hej</li>
          <li>hej</li>
          <li>hej</li>
        </ul>
      </nav>
    </Drawer>
  );
}
