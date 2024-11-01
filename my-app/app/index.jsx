import { SignedIn, SignedOut, useUser } from '@clerk/clerk-expo'
import { Link } from 'expo-router'
import { Text, View ,Pressable,TouchableOpacity} from 'react-native'

export default function Page() {
  const { user } = useUser()
    const{useRouter}=useRouter()
    const{useEmail}=useClerk()

    

  return (
    <View className="flex-1 justify-center items-center">
        
      <SignedIn>
        <Text className="text-3xl bg-white text-center ">Hello {user?.emailAddresses[0].emailAddress}</Text>

        <TouchableOpacity className="bg-black rounded-md">
        </TouchableOpacity>


      </SignedIn>
      <SignedOut>
        <Link href="/sign-in">

        <Pressable>

        </Pressable>


          <Text>Sign In</Text>
        </Link>
        <Link href="/sign-up">

         <Text>Sign Up</Text>
        </Link>
      </SignedOut>
    </View>
  )
}