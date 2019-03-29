import { scaleThreshold } from 'd3-scale';

export const thresholdScaleCalc = (domain, range) => {
    return scaleThreshold()
        .domain(domain)
        .range(range)
}
