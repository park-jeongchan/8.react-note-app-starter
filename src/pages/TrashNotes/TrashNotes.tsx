
import { Container, EmptyMsgBox } from '../../styles/styles';
import { useAppSelector } from '../../hooks/redux';
import { MainWrapper } from '../../components';


const TrashNotes = () => {

const { trashNotes } = useAppSelector((state) => state.notesList);

return (
  <Container>
    {trashNotes.length === 0 ? (
      <EmptyMsgBox>노트가 없습니다.</EmptyMsgBox>
    ) : (
      <MainWrapper notes={trashNotes} type="trash" />
    )}
  </Container>
);
}

export default TrashNotes