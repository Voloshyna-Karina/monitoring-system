import React, { useState } from "react";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import axios from "axios";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const PersonalOfficeComponent: React.FC = () => {
  const [idCode, setIDCode] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

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

  const handleEditUsers = async () => {
    navigate('/personal-office');
    handleCloseModal();
    // try {
    //   const response = await axios.post("/src/api/components/editUser.php", {
    //     idCode: idCode,
    //     login: login,
    //     password: password,
    //   });

    //   if (response.data.success) {
    //     console.log("Користувач успішно зареєстрований");
    //     navigate('/personal-office');
        
    //   } else {
    //     console.error("Помилка під час реєстрації:", response.data.error);
    //   }
    // } catch (error) {
    //   console.error("Помилка при надсиланні запиту:", error);
    // }
  };

  return (
    <Box className="PersonalOfficeComponentBlock">
      <Box className="ComponentTextBlock">
        <Typography className="SupportingText">Цифровий код (РНОКПП): {idCode}</Typography>
        <Typography className="MainText">ggg</Typography>
      </Box>
      <Box className="ComponentTextBlock">
        <Typography className="SupportingText">Логін:</Typography>
        <Typography className="MainText">ggg</Typography>
      </Box>
      <Box className="ComponentTextBlock">
        <Typography className="SupportingText">Пароль:</Typography>
        <Typography className="MainText">ggg</Typography>
      </Box>
      <Button variant="outlined" onClick={handleAddNewProductComponent}>Редагувати</Button>


      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <Box sx={isModalOpenStyle}>
          <Typography
            variant="h4"
            fontFamily="Iter"
            textAlign="center"
            marginBottom={2}
          >
            Редагувати особисті дані
          </Typography>
          <TextField
            fullWidth={true}
            margin="normal"
            id="#"
            label="Цифровий код"
            type="number"
            variant="outlined"
            placeholder="Введіть РНОКПП"
            value={idCode}
            onChange={(e) => setIDCode(e.target.value)}
          />
          <TextField
            fullWidth={true}
            margin="normal"
            id="#"
            label="Логін"
            type="text"
            variant="outlined"
            placeholder="Введіть логін"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
          <TextField
            fullWidth={true}
            margin="normal"
            id="#"
            label="Пароль"
            type="password"
            variant="outlined"
            placeholder="Введіть пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Box sx={{ display: "flex", marginTop: 2, marginBottom: 1 }}>
            <Button
              id="ADDDDD"
              sx={{ marginRight: 2 }}
              variant="contained"
              onClick={handleEditUsers}
            >
              Зберегти
            </Button>
            <Button id="ADDDDD" variant="contained" onClick={handleCloseModal}>
              Відмінити
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default PersonalOfficeComponent;