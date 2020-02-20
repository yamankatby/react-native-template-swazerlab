import React from 'react';
import { Text, TextStyle, View, ViewStyle } from 'react-native';

import Touchable from '../Button/Touchable';

import { usePalette } from '../../assets/styles';
import { useSegmentedViewStyles } from './styles';

interface Props<T> {
	style?: ViewStyle;
	textStyle?: TextStyle;

	segments: Array<{ id: T, title: string }>;
	selectedId?: T;

	onSelect?: (selectedId: T) => void;
}

function SegmentedView<T>(props: Props<T>) {
	const palette = usePalette();
	const styles = useSegmentedViewStyles();

	const handleSelection = (id: T) => {
		const { onSelect } = props;
		if (onSelect) onSelect(id);
	};

	const { style, segments, selectedId } = props;

	const getSegment = (segment: { id: T, title: string }) => {
		const isSelected = selectedId === segment.id;

		const getTitle = () => {
			if (!segment.title) return;
			return (
				<Text style={[styles.segmentTitle(isSelected), props.textStyle]}>
					{segment.title}
				</Text>
			);
		};

		return (
			<View key={`key__${segment.id}`} style={styles.segmentContainer}>
				<Touchable onPress={() => handleSelection(segment.id)}>
					<View style={styles.segment(isSelected)}>
						{getTitle()}
					</View>
				</Touchable>
			</View>
		);
	};

	const getSegments = () => {
		if (!segments) return;
		return segments.map(getSegment);
	};

	return (
		<View style={[styles.container, style]}>
			{getSegments()}
		</View>
	);
}

export default SegmentedView;
