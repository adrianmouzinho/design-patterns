package br.com.adrian.atividade02;

public class Automovel {
    
    private String placa;
    private String marca;
    private String modelo;
    
    public Automovel(String placa, String marca, String modelo) {
        this.placa = placa;
        this.marca = marca;
        this.modelo = modelo;
    }
    
    public String getPlaca() {
        return this.placa;
    }
    
    public String getMarca() {
        return this.marca;
    }
    
    public String getModelo() {
        return this.modelo;
    }
    
    public void setPlaca(String placa) {
        this.placa = placa;
    }
    
    public void setMarca(String placa) {
        this.marca = marca;
    }
    
    public void setModelo(String modelo) {
        this.modelo = modelo;
    }
}
