import NpcOptions from "./NpcOptions.jsx";
import ToggleDialog from "../hooks/ToggleDialog.jsx";
export default function NewCharacterButton() {
  return (
    <ToggleDialog name="New Charecter">
      <NpcOptions />
    </ToggleDialog>
  );
}
