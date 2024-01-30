import { useHeaderHeight } from '@react-navigation/elements';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as ContextMenu from '@rn-primitives/context-menu';
// TODO: wants to import @rn-primitives/portal/portal-native
import { PortalHost } from '@rn-primitives/portal';

export default function ContextPrimitiveScreen() {
  const headerHeight = useHeaderHeight();
  const [open, setOpen] = React.useState(false);
  const [openInner, setOpenInner] = React.useState(false);
  const [openSub, setOpenSub] = React.useState(false);
  const [openSub2, setOpenSub2] = React.useState(false);
  const [openSub3, setOpenSub3] = React.useState(false);
  const insets = useSafeAreaInsets();
  const contentInsets = {
    top: insets.top,
    bottom: insets.bottom,
    left: 12,
    right: 12,
  };
  const [checkboxValue, setCheckboxValue] = React.useState(false);
  const [radioValue, setRadioValue] = React.useState('1');
  const [subCheckboxValue, setSubCheckboxValue] = React.useState(false);
  const [subRadioValue, setSubRadioValue] = React.useState('1');

  function onClose() {
    setOpenSub(false);
    setOpenSub2(false);
    setOpenSub3(false);
  }

  return (
    <>
      <View className='flex-1 justify-center items-center p-6 gap-12'>
        <ContextMenu.Root open={open} onOpenChange={setOpen} className='w-full'>
          <ContextMenu.Trigger className='p-5 border border-dashed rounded-xl border-sky-500 bg-sky-100/20 web:cursor-default'>
            <Text className='text-foreground select-none text-xl text-center'>
              Root Portal ContextMenu
            </Text>
            <Text className='text-foreground select-none font-bold text-center'>
              LONG PRESS / RIGHT CLICK WITHIN DASHED BORDER
            </Text>
            <Text className='text-foreground select-none text-sm text-center'>
              Relative to long press location (native only)
            </Text>
          </ContextMenu.Trigger>
          <ContextMenu.Portal>
            <ContextMenu.Overlay
              style={StyleSheet.absoluteFill}
              className='bg-sky-500/10'
              onPress={onClose}
            >
              <ContextMenu.Content
                align='start'
                insets={contentInsets}
                className='bg-background'
              >
                <ContextMenu.Group>
                  <ContextMenu.Label className='text-foreground select-none font-bold'>
                    Label
                  </ContextMenu.Label>
                  <ContextMenu.Item onPress={onClose}>
                    <Text className='text-foreground select-none text-xl'>
                      Item 1
                    </Text>
                  </ContextMenu.Item>
                  <ContextMenu.Item onPress={onClose}>
                    <Text className='text-foreground select-none text-xl'>
                      Item 2
                    </Text>
                  </ContextMenu.Item>
                </ContextMenu.Group>
                <ContextMenu.Separator />
                <ContextMenu.CheckboxItem
                  checked={checkboxValue}
                  onCheckedChange={setCheckboxValue}
                  closeOnPress={false}
                  className='flex-row justify-between items-center gap-3'
                >
                  <Text className='text-foreground select-none text-xl'>
                    Is checked?
                  </Text>
                  <ContextMenu.ItemIndicator className='w-2 h-4 bg-red-500' />
                </ContextMenu.CheckboxItem>
                <ContextMenu.Sub open={openSub} onOpenChange={setOpenSub}>
                  <ContextMenu.SubTrigger>
                    <Text className='text-foreground select-none text-xl'>
                      SUB TRIGGER
                    </Text>
                  </ContextMenu.SubTrigger>
                  <ContextMenu.SubContent className='bg-blue-500'>
                    <ContextMenu.Item onPress={onClose}>
                      <Text className='text-foreground select-none text-xl'>
                        SubItem 1
                      </Text>
                    </ContextMenu.Item>
                    <ContextMenu.CheckboxItem
                      checked={subCheckboxValue}
                      onCheckedChange={setSubCheckboxValue}
                      closeOnPress={false}
                      className='flex-row justify-between items-center gap-3'
                    >
                      <Text className='text-foreground select-none text-xl'>
                        Sub is checked?
                      </Text>
                      <ContextMenu.ItemIndicator className='w-2 h-4 bg-red-500' />
                    </ContextMenu.CheckboxItem>

                    <ContextMenu.Sub open={openSub2} onOpenChange={setOpenSub2}>
                      <ContextMenu.SubTrigger>
                        <Text className='text-foreground select-none text-xl'>
                          SUB TRIGGER 2
                        </Text>
                      </ContextMenu.SubTrigger>
                      <ContextMenu.SubContent className='bg-secondary'>
                        <ContextMenu.Item onPress={onClose}>
                          <Text className='text-foreground select-none text-xl'>
                            SubItem 2
                          </Text>
                        </ContextMenu.Item>
                        <ContextMenu.RadioGroup
                          value={subRadioValue}
                          onValueChange={setSubRadioValue}
                        >
                          <ContextMenu.RadioItem
                            className='flex-row justify-between items-center gap-3'
                            value='1'
                            closeOnPress={false}
                          >
                            <Text className='text-foreground select-none text-xl'>
                              Sub 2 Radio 1
                            </Text>
                            <ContextMenu.ItemIndicator className='w-2 h-4 bg-blue-500' />
                          </ContextMenu.RadioItem>
                          <ContextMenu.RadioItem
                            className='flex-row justify-between items-center gap-3'
                            value='2'
                            closeOnPress={false}
                          >
                            <Text className='text-foreground select-none text-xl'>
                              Sub 2Radio 2
                            </Text>
                            <ContextMenu.ItemIndicator className='w-2 h-4 bg-blue-500' />
                          </ContextMenu.RadioItem>
                        </ContextMenu.RadioGroup>
                      </ContextMenu.SubContent>
                    </ContextMenu.Sub>
                  </ContextMenu.SubContent>
                </ContextMenu.Sub>
                <ContextMenu.RadioGroup
                  value={radioValue}
                  onValueChange={setRadioValue}
                >
                  <ContextMenu.RadioItem
                    className='flex-row justify-between items-center gap-3'
                    value='1'
                    closeOnPress={false}
                  >
                    <Text className='text-foreground select-none text-xl'>
                      Radio 1
                    </Text>
                    <ContextMenu.ItemIndicator className='w-2 h-4 bg-blue-500' />
                  </ContextMenu.RadioItem>
                  <ContextMenu.RadioItem
                    className='flex-row justify-between items-center gap-3'
                    value='2'
                    closeOnPress={false}
                  >
                    <Text className='text-foreground select-none text-xl'>
                      Radio 2
                    </Text>
                    <ContextMenu.ItemIndicator className='w-2 h-4 bg-blue-500' />
                  </ContextMenu.RadioItem>
                </ContextMenu.RadioGroup>
              </ContextMenu.Content>
            </ContextMenu.Overlay>
          </ContextMenu.Portal>
        </ContextMenu.Root>
        <ContextMenu.Root
          relativeTo='trigger'
          open={openInner}
          onOpenChange={setOpenInner}
          className='w-full'
        >
          <ContextMenu.Trigger className='p-5 border border-dashed rounded-xl border-sky-500 bg-sky-100/20 web:cursor-default'>
            <Text className='text-foreground select-none text-xl text-center'>
              Inner Portal ContextMenu
            </Text>
            <Text className='text-foreground select-none font-bold text-center'>
              LONG PRESS / RIGHT CLICK WITHIN DASHED BORDER
            </Text>
            <Text className='text-foreground select-none text-sm text-center'>
              Relative to trigger positioning (native only)
            </Text>
          </ContextMenu.Trigger>
          <ContextMenu.Portal hostName='inner'>
            <ContextMenu.Overlay
              style={StyleSheet.absoluteFill}
              className='bg-sky-500/10'
            >
              <ContextMenu.Content
                align='center'
                sideOffset={-headerHeight}
                insets={contentInsets}
                className='bg-background'
              >
                <ContextMenu.Label className='text-foreground select-none font-bold'>
                  Label
                </ContextMenu.Label>
                <ContextMenu.Item onPress={onClose}>
                  <Text className='text-foreground select-none text-xl'>
                    Item 1
                  </Text>
                </ContextMenu.Item>
                <ContextMenu.Sub open={openSub3} onOpenChange={setOpenSub3}>
                  <ContextMenu.SubTrigger>
                    <Text className='text-foreground select-none text-xl'>
                      SUB TRIGGER
                    </Text>
                  </ContextMenu.SubTrigger>
                  <ContextMenu.SubContent className='bg-secondary'>
                    <ContextMenu.Item onPress={onClose}>
                      <Text className='text-foreground select-none text-xl'>
                        SubItem 1
                      </Text>
                    </ContextMenu.Item>
                    <ContextMenu.CheckboxItem
                      checked={subCheckboxValue}
                      onCheckedChange={setSubCheckboxValue}
                      closeOnPress={false}
                      className='flex-row justify-between items-center gap-3'
                    >
                      <Text className='text-foreground select-none text-xl'>
                        Is checked?
                      </Text>
                      <ContextMenu.ItemIndicator className='w-2 h-4 bg-red-500' />
                    </ContextMenu.CheckboxItem>

                    <ContextMenu.RadioGroup
                      value={subRadioValue}
                      onValueChange={setSubRadioValue}
                    >
                      <ContextMenu.RadioItem
                        className='flex-row justify-between items-center gap-3'
                        value='1'
                        closeOnPress={false}
                      >
                        <Text className='text-foreground select-none text-xl'>
                          Radio 1
                        </Text>
                        <ContextMenu.ItemIndicator className='w-2 h-4 bg-blue-500' />
                      </ContextMenu.RadioItem>
                      <ContextMenu.RadioItem
                        className='flex-row justify-between items-center gap-3'
                        value='2'
                        closeOnPress={false}
                      >
                        <Text className='text-foreground select-none text-xl'>
                          Radio 2
                        </Text>
                        <ContextMenu.ItemIndicator className='w-2 h-4 bg-blue-500' />
                      </ContextMenu.RadioItem>
                    </ContextMenu.RadioGroup>
                  </ContextMenu.SubContent>
                </ContextMenu.Sub>
              </ContextMenu.Content>
            </ContextMenu.Overlay>
          </ContextMenu.Portal>
        </ContextMenu.Root>
        <PortalHost name='inner' />
      </View>
    </>
  );
}
