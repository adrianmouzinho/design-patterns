package br.com.adrian.atividade02;

public class Carro extends Automovel {
    
    private int numPortas;
    
    public Carro(String placa, String marca, String modelo, int numPortas) {
        super(placa, marca, modelo);
        this.numPortas = numPortas;
    }
    
    public int getNumPortas() {
        return this.numPortas;
    }
    
    public void setNumPortas(int numPortas) {
        this.numPortas = numPortas;
    }
}
