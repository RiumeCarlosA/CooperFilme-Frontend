import styled from 'styled-components'
import { Box, IconButton, TextField } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout'
import SearchIcon from '@mui/icons-material/Search'
import { useState } from 'react'
import LogoSvg from '../../../public/vite.svg'
import { useAuth } from '../../contexts/AuthContext'

const Container = styled.div`
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  /* padding: 0px 24px; */
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
`

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  height: 100%;
  padding: 8px 32px;
  max-width: 1128px;
`

const Logo = styled.span`
  margin-right: 8px;
  font-size: 0;
`

const SearchContainer = styled.div`
  position: relative;
  width: 300px;
`

function Header() {
  const { logout } = useAuth()
  const [searchQuery, setSearchQuery] = useState('')

  function logoutUser() {
    logout()
  }

  function handleSearchChange(event) {
    setSearchQuery(event.target.value)
  }

  return (
    <Container>
      <Content>
        <Logo>
          <a href={'/home'}>
            <img src={LogoSvg} alt="" width="24px" height="24px" />
          </a>
        </Logo>
        (
          <>
            <SearchContainer>
              <TextField
                variant="outlined"
                size="small"
                placeholder="Pesquisar..."
                value={searchQuery}
                onChange={handleSearchChange}
                InputProps={{
                  startAdornment: <SearchIcon />,
                }}
              />
            </SearchContainer>

            {/* <Box sx={{ display: 'flex', flexDirection: 'row', gap: '16px' }}>
              
            </Box> */}
          </>
        )
        <Box>
          <IconButton color="primary" onClick={() => logoutUser()}>
            <LogoutIcon />
          </IconButton>
        </Box>
      </Content>
    </Container>
  )
}

export default Header
