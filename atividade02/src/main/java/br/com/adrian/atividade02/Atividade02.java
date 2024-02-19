package br.com.adrian.atividade02;

public class Atividade02 {

    public static void main(String[] args) {
        Carro carro = new Carro("XXXXX", "Fiat", "Toro", 4);
        System.out.println(carro.getPlaca());
        System.out.println(carro.getMarca());
        System.out.println(carro.getModelo());
        
        System.out.println("");
        
        Onibus onibus = new Onibus("XXXXX", "Mercedes Benz", "Urbano", 2, 85);
        System.out.println(onibus.getPlaca());
        System.out.println(onibus.getMarca());
        System.out.println(onibus.getModelo());
    }
}
