import { create } from "zustand";

interface User {
    userId: string | number;
    userName: string;
}

export interface UserState {
    user: User | null;
    fetchUser: () => Promise<User | null>;
}

export function getUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                userId: "1234565",
                userName: "fifo2024",
            });
        }, 1000);
    });
}

const useUserStore = create<UserState>()((set) => ({
    user: null,
    fetchUser: () => {
        return getUser()
            .then((res: any) => {
                const user: User = {
                    userId: res.userId,
                    userName: res.userName,
                };
                set({ user });
                return user;
            })
            .catch((err: Error) => {
                console.log("fetchUser::error", err);
                set({ user: null });
                return null;
            });
    },
}));

export default useUserStore;
