import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 32px 32px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 22px;
`;
