"use client";
import React, { FC, useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";

type AnimatedNumberProps = {
	n: number;
};

const AnimatedNumber: FC<AnimatedNumberProps> = ({ n }) => {
	const [test, setTest] = useState(0);

	useEffect(() => {
		setTest(n);
	}, []);

	const { number } = useSpring({
		from: { number: 0 },
		number: test,
		delay: 200,
		config: { mass: 1, tension: 20, friction: 10 },
	});
	return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
};

export default AnimatedNumber;
