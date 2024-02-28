import java.util.ArrayList;
import java.util.Optional;

public class UserManager {
    private static UserManager instance;
    private ArrayList<User> users;

    private UserManager() {
        this.users = new ArrayList<User>();
    }

    public static UserManager getInstance() {
        if (instance == null) {
            instance = new UserManager();
        }

        return instance;
    }

    public ArrayList<User> getUsers() {
        return this.users;
    }

    public void register(String name, String password) {
        var user = new User(name, password);

        this.users.add(user);
    }

    public User signIn(String name, String password) throws Exception {
        Optional<User> existingUser = this.users.stream()
                .filter(user -> user.getName().equals(name))
                .findFirst();

        if (existingUser.isEmpty()) {
            throw new Exception("User not found.");
        }

        if (!existingUser.get().getPassword().equals(password)) {
            throw new Exception("Invalid password.");
        }

        return existingUser.get();
    }
}
