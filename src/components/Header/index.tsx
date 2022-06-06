import React from "react";
import { Box, Button, FormControl, MenuItem, Select, SelectChangeEvent, Stack, TextField, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { ChangeLocalizationSVGComponent } from "../../icons";
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

export default function Header() {

  const [selectOption, setSelectOption] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setSelectOption(event.target.value as string);
  };

  return (
    <Box
      sx={{
        height: "65px",
        backgroundColor: "#315E32",
        display: "flex",
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        px="20px"
      >

        <Box
          sx={{
            minWidth: "38px",
            minHeight: "38px",
            backgroundColor: "#254726",
            borderRadius: "50%",
            color: "#ffffff",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MenuIcon />
        </Box>

        <Box
          sx={{
            marginLeft: "24px",
            minWidth: "250px"
          }}
        >
          <Typography
            sx={{
              fontSize: "1.125rem",
              fontWeight: "500",
              lineHeight: "24px",
              color: "#ffffff",
            }}
          >
            Fazenda da Embrapa
          </Typography>
          <Typography
            noWrap
            sx={{
              fontSize: "0.75rem",
              fontWeight: "500",
              lineHeight: "14px",
              color: "#ffffff",
            }}
          >
            Lote 12345678912145 | Fazenda da Embrapa
          </Typography>
        </Box>

        <Button
          sx={{
            border: "2px solid #FFFFFF",
            borderRadius: "4px",
            padding: "9px",
            textTransform: "capitalize",
            marginLeft: "24px",
            minWidth: "175px",
            minHeight: "40px"
          }}
          startIcon={<ChangeLocalizationSVGComponent />}
        >
          <Typography
            sx={{
              fontSize: "0.875rem",
              fontWeight: "500",
              lineHeight: "16.41px",
              color: "#ffffff",
            }}
          >
            Trocar Propriedade
          </Typography>
        </Button>

        <FormControl
          sx={{
            minWidth: "120px",
            minHeight: "40px",
            border: "2px solid #FFFFFF",
            borderRadius: "4px",
            marginLeft: "87px",
            padding: "0px"

          }}>
          <Select
            value={selectOption}
            onChange={handleChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
            size="small"
            sx={{
              fontSize: "0.875rem",
              fontWeight: "500",
              lineHeight: "16.41px",
              color: "#ffffff",
              padding: "0px"

            }}

          >
            <MenuItem value="">
              ID Visual
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <FormControl
          sx={{
            marginLeft: "16px",
            minWidth: 338,
            borderRadius: "20px",
            backgroundColor: "#ffffff",
            height: "40px",
            displat: "flex",
            alignItems: "center",
            flexDirection: "row"
          }}
        >
          <TextField id="standard-basic" variant="standard" size="small"
            placeholder="Digite o número do brinco, da tatuagem, etc."
            sx={{
              flex: 1,
              fontSize: "13px",
              paddingLeft: "10px",
              paddingRight: "15px",
              paddingTop: "5px",
            }}
            InputProps={{
              disableUnderline: true,

            }}
          />
          <Box
            sx={{
              width: "40px",
              height: "40px",
              backgroundColor: "#853E00",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#ffffff"
            }}>

            <SearchIcon sx={{
              fontSize: 26
            }} />
          </Box>
        </FormControl>


        <NotificationsNoneIcon sx={{
          color: "#ffffff",
          marginLeft: "50px",
          cursor: "pointer",
          fontSize: 26
        }}
        />

        <Box
          sx={{
            marginLeft: "28px",
            textAlign: "right",
            display: "flex",
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <Box          >

            <Typography
              sx={{
                fontSize: "1rem",
                fontWeight: "500",
                lineHeight: "24px",
                letterSpacing: "0.15px",
                color: "#ffffff",
              }}
            >
              João Silva
            </Typography>
            <Typography
              sx={{
                fontSize: "0.875rem",
                fontWeight: "400",
                lineHeight: "24px",
                color: "#ffffff",
              }}
            >
              email@email.com.br
            </Typography>
          </Box>
          <ArrowDropDownIcon sx={{ color: "#ffffff", marginLeft: "16px", cursor: "pointer" }} />
        </Box>

      </Stack >
    </Box >
  );
}
