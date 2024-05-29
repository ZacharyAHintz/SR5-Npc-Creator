import NpcOptions from "./NpcOptions.jsx";
import ToggleDialog from "../hooks/ToggleDialog.jsx";
export default function NewCharacterButton({ toggleDialog }) {
  return (
    <ToggleDialog name="New Charecter">
      <NpcOptions toggleDialog={toggleDialog} />
    </ToggleDialog>
  );
}
