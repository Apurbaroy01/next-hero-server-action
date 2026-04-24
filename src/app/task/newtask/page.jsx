

import { postAtask } from "@/lib/Action";
import { ChevronsExpandVertical,  } from "@gravity-ui/icons";
import { Input, Label, TextField, Select, ListBox, Modal, Button } from '@heroui/react';

const newTaskPage = () => {
    return (
        <div className="w-1/2 mx-auto">
            <form action={postAtask} className="flex flex-col gap-4">
                <TextField className="w-full" name="title" type="text">
                    <Label>Title</Label>
                    <Input placeholder="Enter your name" />
                </TextField>
                <TextField className="w-full" name="email" type="email">
                    <Label>Email</Label>
                    <Input placeholder="Enter your email" />
                </TextField>


                <Select name="type" className="w-[256px]" placeholder="Select one">
                    <Label>Select type</Label>
                    <Select.Trigger>
                        <Select.Value />
                        <Select.Indicator className="size-3">
                            <ChevronsExpandVertical />
                        </Select.Indicator>
                    </Select.Trigger>
                    <Select.Popover>
                        <ListBox>
                            <ListBox.Item id="low" textValue="Florida">
                                Low
                                <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="medium" textValue="Delaware">
                                Medium
                                <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="high" textValue="California">
                                High
                                <ListBox.ItemIndicator />
                            </ListBox.Item>

                        </ListBox>
                    </Select.Popover>
                </Select>


                <Modal.Footer>
                    <Button slot="close" variant="secondary">
                        Cancel
                    </Button>
                    <Button type="submit">Submit TAsk</Button>
                </Modal.Footer>
            </form>
        </div>
    );
};

export default newTaskPage;