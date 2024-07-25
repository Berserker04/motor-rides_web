'use client';

import { FaCircleInfo, FaPenToSquare, FaTrash } from "react-icons/fa6";

import { actionInit } from '@/shared/types/common/commonInit';
import { Button, Table } from 'flowbite-react';
import { deleteAlert } from "@/shared/helpers/alerts";

const TableDefault = ({ columns, data = [], actions = actionInit }: ITableDefault) => {
    const { infoEvent, editEvent, delEvent }: IAction = actions

    const infoHandler = (item: any) => {
        if(infoEvent){
            infoEvent(item);
        }
    }
    const editHandler = (item: any) => {
        if(editEvent){
            editEvent(item);
        }
    }
    const deleteHandler = (id: number) => {
        deleteAlert(id, delEvent);
    }

    return (
        <Table hoverable>
            <Table.Head>
                <Table.HeadCell>
                    #
                </Table.HeadCell>
                {
                    columns.map((column, i) => (
                        <Table.HeadCell key={i}>
                            {column.title}
                        </Table.HeadCell>
                    ))
                }
                {
                    (infoEvent || editEvent || delEvent) && (
                        <Table.HeadCell>
                            <span>
                                {/* //className="sr-only" */}
                                Acciones
                            </span>
                        </Table.HeadCell>
                    )
                }
            </Table.Head>
            <Table.Body className="divide-y">
                {
                    data.map((item, i) => (
                        <Table.Row key={item.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell>
                                {i + 1}
                            </Table.Cell>
                            {
                                columns.map((column, j) => (
                                    <Table.Cell key={j}>
                                        {item[column.name]}
                                    </Table.Cell>
                                ))
                            }
                            <Table.Cell className="flex gap-1">
                                {
                                    infoEvent && (
                                        <Button size="xs" onClick={() => infoHandler(item)}> 
                                            <FaCircleInfo className="h-5 w-5" />
                                        </Button>
                                    )
                                }
                                {
                                    editEvent && (
                                        <Button size="xs" color="warning" onClick={() => editHandler(item)}>
                                            <FaPenToSquare className="h-5 w-5" />
                                        </Button>
                                    )
                                }
                                {
                                    delEvent && (
                                        <Button size="xs" color="failure" onClick={() => deleteHandler(item.id)}>
                                            <FaTrash className="h-5 w-5" />
                                        </Button>
                                    )
                                }
                            </Table.Cell>
                        </Table.Row>
                    ))
                }
            </Table.Body>
        </Table>
    )
}

export default TableDefault