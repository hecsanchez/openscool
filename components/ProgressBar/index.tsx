import {Bar, ProgressBarBackground, ProgressBarWrapper, ProgressText} from "@/components/ProgressBar/styled";
import {FC} from "react";

interface ProgressBarProps {
    progress: number;
}
const ProgressBar: FC<ProgressBarProps> = ({ progress }) => {
    return (
        <ProgressBarWrapper>
            <ProgressText>{progress}%</ProgressText>
            <ProgressBarBackground>
                <Bar progress={progress}/>
            </ProgressBarBackground>
        </ProgressBarWrapper>
    )
}

export default ProgressBar;