import {Button} from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import {Session} from "@supabase/supabase-js";
import {supabaseClient} from "@/config/supabase-client";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

export function AuthPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [session, setSession] = useState<Session | null>();
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        supabaseClient.auth.getSession().then(({data: {session}}) => {
            setSession(session);
        });

        supabaseClient.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });
    }, []);

    const handleLogin = async () => {
        // TODO: Add loading animation
        setLoading(true);
        try {
            const {error} = await supabaseClient.auth.signInWithPassword({
                email,
                password,
            });

            if (error) throw error;
            navigate("/");
        } catch (err) {
            throw err;
        } finally {
            setEmail("");
            setPassword("");
            setLoading(false);
        }
    }

    async function handleRegister(e: { preventDefault: () => void }) {
        e.preventDefault();

        try {
            const {data, error} = await supabaseClient.auth.signUp({
                email,
                password,
            });
            console.log(email, password);

            if (error) throw error;
            // TODO: Make a toast notification instead
            alert("Check your email for verification link");
            // TODO: navigate back to Login tab?
        } catch (err) {
            throw err;
        } finally {
            setEmail("");
            setPassword("");
            setLoading(false);
        }
    }

    return (
        <div className="container flex h-screen w-screen flex-col items-center justify-center">
            <Tabs defaultValue="login" className="w-[400px] ">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="login">Login</TabsTrigger>
                    <TabsTrigger value="register">Register</TabsTrigger>
                </TabsList>
                <TabsContent value="login">
                    <Card>
                        <CardHeader>
                            <CardTitle>Login</CardTitle>
                            <CardDescription>
                                Make changes to your account here. Click save when you're done.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" value={email}
                                       onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="password">Password</Label>
                                <Input id="password" type="password" value={password}
                                       onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button onClick={handleLogin}>Login</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
                <TabsContent value="register">
                    <Card>
                        <CardHeader>
                            <CardTitle>Register</CardTitle>
                            <CardDescription>
                                Change your password here. After saving, you'll be logged out.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" value={email}
                                       onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="password">Password</Label>
                                <Input id="password" type="password" value={password}
                                       onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button onClick={handleRegister}>Register</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default AuthPage;
