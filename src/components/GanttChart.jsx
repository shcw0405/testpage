import React, { useState } from "react";
import { Box, Typography, Paper, Divider } from "@mui/material";

// 由于react-gantt-chart与React 19存在兼容性问题，我们自己实现一个简单的甘特图组件
const GanttChart = () => {
  // 示例项目数据
  const [tasks] = useState([
    {
      id: 1,
      name: "Requirements Analysis",
      startDate: "2025-03-01",
      endDate: "2025-03-10",
      progress: 100,
      color: "#4caf50",
    },
    {
      id: 2,
      name: "System Design",
      startDate: "2025-03-08",
      endDate: "2025-03-20",
      progress: 80,
      color: "#2196f3",
    },
    {
      id: 3,
      name: "Frontend Development",
      startDate: "2025-03-15",
      endDate: "2025-04-10",
      progress: 60,
      color: "#ff9800",
    },
    {
      id: 4,
      name: "Backend Development",
      startDate: "2025-03-15",
      endDate: "2025-04-15",
      progress: 50,
      color: "#f44336",
    },
    {
      id: 5,
      name: "Testing",
      startDate: "2025-04-10",
      endDate: "2025-04-25",
      progress: 20,
      color: "#9c27b0",
    },
    {
      id: 6,
      name: "Deployment",
      startDate: "2025-04-25",
      endDate: "2025-05-01",
      progress: 0,
      color: "#795548",
    },
  ]);

  // 计算甘特图的时间范围
  const startDate = new Date("2025-03-01");
  const endDate = new Date("2025-05-01");
  const totalDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));

  // 生成月份标签
  const months = [];
  const currentDate = new Date(startDate);
  while (currentDate <= endDate) {
    const month = currentDate.toLocaleString("zh-CN", { month: "short" });
    if (!months.includes(month)) {
      months.push(month);
    }
    currentDate.setDate(currentDate.getDate() + 7); // 每周检查一次
  }

  // 将日期转换为相对位置
  const getPositionPercentage = (date) => {
    const taskDate = new Date(date);
    const daysDiff = Math.ceil((taskDate - startDate) / (1000 * 60 * 60 * 24));
    return (daysDiff / totalDays) * 100;
  };

  return (
    <Box sx={{ width: "100%", overflowX: "auto" }}>
      {/* 月份标尺 */}
      <Box sx={{ display: "flex", mb: 1, pl: "200px" }}>
        {months.map((month, index) => (
          <Typography
            key={index}
            variant="caption"
            sx={{
              flexGrow: 1,
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            {month}
          </Typography>
        ))}
      </Box>

      {/* 任务列表 */}
      {tasks.map((task) => {
        const startPos = getPositionPercentage(task.startDate);
        const endPos = getPositionPercentage(task.endDate);
        const width = endPos - startPos;

        return (
          <Box
            key={task.id}
            sx={{ display: "flex", mb: 2, alignItems: "center" }}
          >
            {/* 任务名称 */}
            <Box sx={{ width: "200px", pr: 2 }}>
              <Typography variant="body2" noWrap>
                {task.name}
              </Typography>
            </Box>

            {/* 甘特图条 */}
            <Box sx={{ flexGrow: 1, position: "relative", height: "30px" }}>
              {/* 背景条 */}
              <Box
                sx={{
                  position: "absolute",
                  left: `${startPos}%`,
                  width: `${width}%`,
                  height: "100%",
                  bgcolor: "grey.200",
                  borderRadius: 1,
                }}
              />

              {/* 进度条 */}
              <Box
                sx={{
                  position: "absolute",
                  left: `${startPos}%`,
                  width: `${width * (task.progress / 100)}%`,
                  height: "100%",
                  bgcolor: task.color,
                  borderRadius: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="caption"
                  sx={{ color: "white", fontWeight: "bold" }}
                >
                  {task.progress}%
                </Typography>
              </Box>
            </Box>
          </Box>
        );
      })}

      {/* 图例 */}
      <Box sx={{ mt: 4, display: "flex", flexWrap: "wrap", gap: 2 }}>
        {tasks.map((task) => (
          <Box key={task.id} sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                width: 16,
                height: 16,
                bgcolor: task.color,
                borderRadius: "50%",
                mr: 1,
              }}
            />
            <Typography variant="caption">{task.name}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default GanttChart;
