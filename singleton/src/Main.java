public class Main {
    public static void main(String[] args) {
        UserManager userManager = UserManager.getInstance();

        userManager.register("Adrian", "123");
        userManager.register("Maria", "123");

        try {
            var user = userManager.signIn("Adrian", "1d23");
            System.out.println(user.getName());
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }
}