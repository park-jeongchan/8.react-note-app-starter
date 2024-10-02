import React, { useState } from 'react'

import { ButtonOutline, Container, EmptyMsgBox } from '../../styles/styles';
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { Box, InputBox, TopBox } from './AllNotes.styles';
import { toggleFiltersModal } from '../../store/modal/modalSlice';
import getAllNotes from '../../utils/getAllNotes';
import { FiltersModal } from '../../components';




const AllNotes = () => {
  
  const dispatch = useAppDispatch();
  const { mainNotes } = useAppSelector((state) => state.notesList);
  const [filter, setFilter] = useState("");
  const [searchInput, setSearchInput] = useState("");
  
  const { viewFiltersModal } = useAppSelector((state) => state.modal);

  const filterHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  }

  const clearHandler = () => {
    setFilter("");
  }
  return (
    <Container>
      {viewFiltersModal && (
        <FiltersModal
          handleFilter={filterHandler}
          handleClear={clearHandler}
          filter={filter}
        />
      )}
      {mainNotes.length === 0 ? (
        <EmptyMsgBox>노트가 없습니다.</EmptyMsgBox>
      ) : (
        <>
          <TopBox>
            <InputBox>
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="노트의 제목을 입력해주세요."
              />
            </InputBox>

            <div className="notes__filter-btn">
              <ButtonOutline
                onClick={() => dispatch(toggleFiltersModal(true))}
                className="nav__btn"
              >
                <span>정렬</span>
              </ButtonOutline>
            </div>
          </TopBox>

          <Box>
            {/* Notes */}
            {getAllNotes(mainNotes, filter)}
          </Box>
        </>
      )}
    </Container>
  );
}

export default AllNotes