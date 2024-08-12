import NpcOptions from "./NpcOptions.jsx";
import NewCharacterToggleDialog from "./NewCharacterToggleDialog.jsx";
export default function NewCharacterButton() {
  return (
    <NewCharacterToggleDialog name="New Charecter">
      <NpcOptions />
    </NewCharacterToggleDialog>
  );
}
