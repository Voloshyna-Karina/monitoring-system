import React, { useEffect, useState } from "react";
import "./styles.css";
import { Box, Typography, Menu, MenuItem, Fade, Button, TextField, Modal } from "@mui/material";
import ProductTable from "./productTable";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name product", width: 150 },
  { field: "price", headerName: "Price product", type: "number", width: 100 },
  { field: "numbers", headerName: "Numbers", type: "number", width: 100 },
];

// const rows = [
//   { id: 1, name: "Snow", price: 64, numbers: 35 },
//   { id: 2, name: "Lannister", price: 75, numbers: 42 },
//   { id: 3, name: "Lannister", price: 87, numbers: 45 },
//   { id: 4, name: "Stark", price: 34, numbers: 16 },
//   { id: 5, name: "Targaryen", price: 89, numbers: null },
// ];

const ProductComponent = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost/phpmyadmin/getProducts.php")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);


  

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleAddNewProductComponent = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const isModalOpenStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "30%",
    backgroundColor: "#ffff",
    borderRadius: 3,
    boxShadow: 30,
    p: 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <Box className="ProductComponentBlock">
      <Box className="ProductBlockText">
        <Typography className="HeaderText" variant="h6" component="h2">
          Товари
        </Typography>
        <div className="MenuManageTableButton">
          <Button
            id="fade-button"
            aria-controls={openMenu ? "fade-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={openMenu ? "true" : undefined}
            onClick={handleClick}
          >
            Меню
          </Button>
          <Menu
            id="fade-menu"
            MenuListProps={{ "aria-labelledby": "fade-button" }}
            anchorEl={anchorEl}
            open={openMenu}
            onClose={handleCloseMenu}
            TransitionComponent={Fade}
          >
            <MenuItem
              onClick={() => {
                handleCloseMenu();
                handleAddNewProductComponent();
              }}
            >
              Додати
            </MenuItem>
            <MenuItem onClick={handleCloseMenu}>Видалити</MenuItem>
          </Menu>
        </div>
      </Box>

      <ProductTable rows={data} columns={columns} />

      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <Box sx={isModalOpenStyle}>
          <Typography
            variant="h4"
            fontFamily="Iter"
            textAlign="center"
            marginBottom={2}
          >
            Додати новий товар
          </Typography>
          <TextField
            fullWidth={true}
            margin="normal"
            id="#"
            label="ID"
            type="number"
            variant="outlined"
            placeholder="Введіть номер товара"
          />
          <TextField
            fullWidth={true}
            margin="normal"
            id="#"
            label="Назва товара"
            variant="outlined"
            placeholder="Введіть назву товара"
          />
          <TextField
            fullWidth={true}
            margin="normal"
            id="#"
            label="Ціна товара"
            type="number"
            variant="outlined"
            placeholder="Введіть ціну товара"
          />
          <TextField
            fullWidth={true}
            margin="normal"
            id="#"
            label="Кількість"
            type="number"
            variant="outlined"
            placeholder="Введіть кількість товарів"
          />
          <Button
            id="ADDDDD"
            sx={{ marginTop: 2, width: "30%", marginBottom: 1 }}
            variant="contained"
            onClick={() => {
              // Добавлен обработчик события для кнопки "Додати" во всплывающем окне
              handleCloseModal();
              // Здесь можно добавить дополнительную логику для обработки добавления
            }}
          >
            Додати
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default ProductComponent;
