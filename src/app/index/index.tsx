import { Image, View, TouchableOpacity } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

import { styles } from "./style"
import { colors } from "@/styles/colors"
import { categories } from "@/utils/categories"

import { Category } from "@/components/category"

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("@/assets/logo.png")} style={styles.logo} />

        <TouchableOpacity>
          <MaterialIcons name="add" size={32} color={colors.green[300]} />
        </TouchableOpacity>
      </View>

      <Category
        name={categories[1].name}
        icon={categories[1].icon}
        isSelected
      />
      <Category name="Site" icon="language" isSelected={false} />
      <Category name="Video" icon="movie" isSelected={false} />
    </View>
  )
}
