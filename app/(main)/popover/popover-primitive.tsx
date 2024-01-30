import { useHeaderHeight } from '@react-navigation/elements';
import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as Popover from '@rn-primitives/popover';
import { PortalHost } from '@rn-primitives/portal';

function getSide(): 'bottom' | 'top' {
  return 'bottom';
}

export default function PopoverPrimitiveScreen() {
  const [open, setOpen] = React.useState(false);
  const [openInner, setOpenInner] = React.useState(false);
  const insets = useSafeAreaInsets();
  const contentInsets = {
    top: insets.top,
    bottom: insets.bottom,
    left: 12,
    right: 12,
  };
  const headerHeight = useHeaderHeight();
  const side = getSide();
  return (
    <>
      <View className='flex-1 justify-center items-center p-6 gap-12'>
        <Popover.Root open={open} onOpenChange={setOpen}>
          <Popover.Trigger>
            <Text className='text-foreground text-xl'>
              Open Root Portal Popover
            </Text>
          </Popover.Trigger>
          <Popover.Portal>
            <NativeOverlay>
              <Popover.Content
                side={side === 'bottom' ? 'top' : 'bottom'}
                align='center'
                sideOffset={3}
                insets={contentInsets}
                className='bg-background'
              >
                <Text className='text-foreground text-xl'>TITLE</Text>
                <Text className='text-foreground text-xl'>DESCRIPTION</Text>
                <Popover.Close>
                  <Text className='text-foreground text-xl'>Close</Text>
                </Popover.Close>
              </Popover.Content>
            </NativeOverlay>
          </Popover.Portal>
        </Popover.Root>
        <Popover.Root open={openInner} onOpenChange={setOpenInner}>
          <Popover.Trigger>
            <Text className='text-foreground text-xl'>
              Open Inner Portal Popover
            </Text>
          </Popover.Trigger>
          <Popover.Portal hostName='inner'>
            <NativeOverlay>
              <Popover.Content
                side={side}
                align='center'
                sideOffset={
                  Platform.OS === 'web'
                    ? 3
                    : side === 'bottom'
                    ? -headerHeight + 3
                    : headerHeight + 3
                }
                insets={contentInsets}
                className='bg-background'
              >
                <Text className='text-foreground text-xl'>TITLE</Text>
                <Text className='text-foreground text-xl'>DESCRIPTION</Text>
                <Popover.Close>
                  <Text className='text-foreground text-xl'>Close</Text>
                </Popover.Close>
              </Popover.Content>
            </NativeOverlay>
          </Popover.Portal>
        </Popover.Root>
        <PortalHost name='inner' />
      </View>
    </>
  );
}

function NativeOverlay({ children }: { children: React.ReactNode }) {
  if (Platform.OS === 'web') {
    return <>{children}</>;
  }
  return (
    <Popover.Overlay style={StyleSheet.absoluteFill} className='bg-red-500/10'>
      {children}
    </Popover.Overlay>
  );
}
