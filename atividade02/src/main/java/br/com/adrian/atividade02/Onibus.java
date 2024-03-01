package br.com.adrian.atividade02;

public class Onibus extends Automovel {
    
    private int numPassageiros;
    private int numEmbratur;
    
    public Onibus(String placa, String marca, String modelo, int numPassageiros, int numEmbratur) {
        super(placa, marca, modelo);
        this.numPassageiros = numPassageiros;
        this.numEmbratur = numEmbratur;
    }
    
    public int getNumPassageiros() {
        return this.numPassageiros;
    }
    
    public int getNumEmbratur() {
        return this.numEmbratur;
    }
    
    public void setNumPassageiros(int numPassageiros) {
        this.numPassageiros = numPassageiros;
    }
    
    public void setNumEmbratur(int numEmbratur) {
        this.numEmbratur = numEmbratur;
    }
}
