import * as React from 'react';
import { useState, useEffect } from 'react';
import { Box, Typography, Card, Select, FormControl, MenuItem, InputLabel } from '@mui/material';

function App() {

  const carros = [
    {
      id: 1,
      modelo: "Fiat Strada",
      marca: "Fiat",
      numeroVendidos: 112.456
    },
    {
      id: 2,
      modelo: "Hyundai HB20",
      marca: "Hyundai",
      numeroVendidos: 96.255
    },
    {
      id: 3,
      modelo: "Chevrolet Onix",
      marca: "Chevrolet",
      numeroVendidos: 85.252
    },
    {
      id: 4,
      modelo: "Chevrolet Onix Plus",
      marca: "Chevrolet",
      numeroVendidos: 75.243
    },
    {
      id: 5,
      modelo: "Fiat Mobi",
      marca: "Fiat",
      numeroVendidos: 72.756
    },
    {
      id: 6,
      modelo: "Volkswagen Gol",
      marca: "Volkswagen",
      numeroVendidos: 72.606
    },
    {
      id: 7,
      modelo: "Chevrolet Tracker",
      marca: "Chevrolet",
      numeroVendidos: 70.806
    },
    {
      id: 8,
      modelo: "Volkswagen T-Cross",
      marca: "Volkswagen",
      numeroVendidos: 65.341
    },
    {
      id: 9,
      modelo: "Fiat Argo",
      marca: "Fiat",
      numeroVendidos: 64.016
    },
    {
      id: 10,
      modelo: "Jeep Compass",
      marca: "Jeep",
      numeroVendidos: 63.564
    },
  ];

  const [filter, setFilter] = useState('');
  const [filteredCars, setFilteredCars] = useState('');

  const handleFilter = (event) => {
    setFilter(event.target.value);
  };

  useEffect(() => {
    const filtering = carros.filter((carro) => {
      if(carro.marca === filter){
        return carro
      }
    });

    setFilteredCars(filtering)
  }, [filter]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box>
        <Typography
          sx={{
            fontSize: 22,
            textAlign: "center",
            marginTop: 3,
            marginBottom: 3
          }}
        >
          Carros mais vendidos em 2022
        </Typography>

        {/* Filter Select Button */}
        <Box sx={{ minWidth: 120, backgroundColor: "white", marginBottom: 3 }}>
          <FormControl fullWidth>
            <InputLabel id="filter-select-label">Marca</InputLabel>
            <Select
              labelId="filter-select-label"
              id="filter-select"
              value={filter}
              label="Age"
              onChange={handleFilter}
            >
              <MenuItem value=""><em>Nenhum</em></MenuItem>
              <MenuItem value="Chevrolet">Chevrolet</MenuItem>
              <MenuItem value="Fiat">Fiat</MenuItem>
              <MenuItem value="Hyundai">Hyundai</MenuItem>
              <MenuItem value="Jeep">Jeep</MenuItem>
              <MenuItem value="Volkswagen">Volkswagen</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* Car Cards */}
        {filter ?
          filteredCars.map((carro) => {
            return (
              <Card
                key={carro.id}
                sx={{
                  width: 300,
                  p: 2,
                  marginBottom: 3,
                }}
              >
                <Typography>
                  <strong>ID:</strong> {carro.id}
                </Typography>
                <Typography>
                  <strong>Modelo:</strong> {carro.modelo}
                </Typography>
                <Typography>
                  <strong>Marca:</strong> {carro.marca}
                </Typography>
                <Typography>
                  <strong>Número de unidades vendida:</strong> {carro.numeroVendidos}
                </Typography>
              </Card>
            )
          })
          :
          carros.map((carro) => {
            return (
              <Card
                key={carro.id}
                sx={{
                  width: 300,
                  p: 2,
                  marginBottom: 3,
                }}
              >
                <Typography>
                  <strong>ID:</strong> {carro.id}
                </Typography>
                <Typography>
                  <strong>Modelo:</strong> {carro.modelo}
                </Typography>
                <Typography>
                  <strong>Marca:</strong> {carro.marca}
                </Typography>
                <Typography>
                  <strong>Número de unidades vendida:</strong> {carro.numeroVendidos}
                </Typography>
              </Card>
            )
          })
        }

      </Box>
    </Box>
  );
}

export default App;
